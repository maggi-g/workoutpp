create database WorkoutSPA

use WorkoutSPA




create table workoutcollection
(
workouttitle  varchar(128),
workoutnote   varchar(256), 
caloriesburnpermin   float, 
categoryid    int    ,
workoutid     int    Primary key identity,
constraint fk_workoutcatagory_categoryid foreign key(categoryid) references workoutcategory(categoryid)
)



create table workoutactive(
id int identity primary key ,
workoutid     int    ,
starttime     time,  
startdate     date,  
enddate       date,  
endtime       time,  
comment       varchar(64)   , 
currentstatus bit,
constraint fk_workoutcollection_workoutid foreign key(workoutid)
references workoutcollection(workoutid) 
       )


create table workoutcategory(
categoryid    int    Primary Key identity,
categoryname varchar(64))
