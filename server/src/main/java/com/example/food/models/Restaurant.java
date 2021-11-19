package com.example.food.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor 
@AllArgsConstructor 
@Builder 

public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long restaurantId;
    private String restaurantName;
    @ManyToMany(cascade = {CascadeType.ALL})
    private List<FoodItem> foodItems;
}
