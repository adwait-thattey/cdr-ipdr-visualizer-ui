#!/bin/bash

export AWS_ACCESS_KEY_ID=<AccessKey>
export AWS_SECRET_ACCESS_KEY=<Secret>

echo "Plz enter your name"


read username

echo "Enter timeperiod (in hours) to run backups in. (decimal value also supported)"
read period

cur_dir_name=`basename $PWD`
echo $cur_dir_name

while :
do
    ts=`date +"%d-%m-%y_%H-%M-%S"`
    echo $ts
    backup_name="$cur_dir_name--$username--$ts"
    mkdir -p ../backups/$backup_name/
    echo "\nStarting backup \n"
    rsync -azhr --stats --exclude-from=.gitignore . ../backups/$backup_name/$cur_dir_name
    echo "compressing"
    tar -zcf ../backups/$backup_name/$backup_name.tar.gz ../backups/$backup_name/$cur_dir_name
    echo "uploading to aws s3"
    aws s3 cp ../backups/$backup_name/$backup_name.tar.gz s3://sih2020backups/$username/
    echo "backup complete"
    sleep "$period""h"
done
