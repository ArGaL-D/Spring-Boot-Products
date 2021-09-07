package com.miscelanea.products.entity;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "p_product")
    private String name;
    @Column(name = "p_details")
    private String details;
    @Column(name = "p_price")
    private double price;

    // CONSTRUCTORS
    public Product(){ }

    public Product(String name, String details, double price) {
        this.name = name;
        this.details = details;
        this.price = price;
    }

    // GETTERS AND SETTERS
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
