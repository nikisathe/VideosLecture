CREATE DATABASE   IF NOT EXISTS TEACHERRECORD;
USE TEACHERRECORD;

CREATE TABLE  IF NOT EXISTS `upload` (
     `id` int(11) PRIMARY KEY,
     `file_name` varchar(100),
    `file_path` varchar(255)
);
