package com.miscelanea.products.repository;

import com.miscelanea.products.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    //JPQL
    /*
    @Query("SELECT tb FROM Product tb WHERE tb.name=?1")
    public List<Product> getProductsByName(String productName);
    */

    @Query("SELECT tb FROM Product tb WHERE tb.name LIKE ?1%")
    public List<Product> getProductsByName(String productName);

}
