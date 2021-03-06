package com.example.food.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.AUTO;

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = AUTO)
    private long id;
    private String name;

    public Role() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Role(long id, String name) {
        this.id = id;
        this.name = name;
    }

//    public Role(Long o, String role_owner) {
//    }
}
