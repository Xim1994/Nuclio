create table pins (
    id int auto_increment not null PRIMARY key,
    name varchar(191) not null,
    description varchar(191) null,
    image_url varchar(255) null,
    board_id int null,
    constraint foreign key (board_id) references boards(id) on delete cascade,
    created_at timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    updated_at timestamp null
);

create table boards (
    id int auto_increment not null PRIMARY key,
    name varchar(191) not null,
    description varchar(191) null,
    category_id varchar(191) null,
    constraint foreign key (category_id) references category(id) on delete cascade,
    owner varchar(191) null,
    created_at timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    updated_at timestamp null
);

create table category (
    id int auto_increment not null primary key,
    name varchar(191) not null,
    created_at timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    updated_at timestamp null
);
