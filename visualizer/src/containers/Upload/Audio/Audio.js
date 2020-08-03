import React, { useState } from 'react';
import styles from './Audio.module.scss';
import { Typography } from 'antd';
import Button from '../../../components/Button/Button';
import axios from '../../../services/axios';

const { Title } = Typography;

const AudioUpload =  () => {

    const [media, setMedia] = useState(null);

    const [person, setPerson] = useState(null);
    const [curse, setCurse] = useState(null);

    const handleUpload = async (type) => {
        if (!media) return;
        const data = new FormData();
        data.append("media_file", media);

        let res;
        if (type === "person") {
            res = await axios.post("/mediamanager/upload/persondetect/", data);
            setPerson(res.data);
            setCurse(null);
        } else {
            res = await axios.post("/mediamanager/upload/speech/", data);
            setCurse(res.data);
            setPerson(null);
        }
        console.log(res);
    }

    const handleChange = (e) => {
        setMedia(e.target.files[0])
    }

    console.log(curse)

    return (
        <div className={styles.container}>
            <div className={styles.element}>
                <Title level={4}>Upload Audio</Title>

                <input type="file" name="file" onChange={handleChange} />

                <div className={styles.wrapper}>
                    <Button text="Person Detect" onClick={() => handleUpload("person")}/>
                    <Button text="Trigger Word Detect" onClick={() => handleUpload("word")}/>
                </div>

                <div>
                    {person && (
                        <>
                            <div>
                                <h5>Name</h5>
                                <h3>{person.person_name}</h3>
                            </div>
                            <div>
                                <h5>Confidence</h5>
                                <h3>{person.confidence}</h3>
                            </div>
                        </>
                    )}
                    {curse && (
                        <>
                            <div>
                                <h4>Transcript</h4>
                                <h2>{curse.transcript}</h2>
                            </div>
                            <div>
                                <h4>Trigger Word exists</h4>
                                <h2>{curse.trigger_word_exists ? "true" : "false"}</h2>
                            </div>
                            <div>
                                <h4>Trigger words</h4>
                                <h2>{curse.trigger_words.join(',')}</h2>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AudioUpload;
