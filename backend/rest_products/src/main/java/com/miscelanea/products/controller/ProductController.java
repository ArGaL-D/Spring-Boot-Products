package com.miscelanea.products.controller;

import com.miscelanea.products.entity.Product;
import com.miscelanea.products.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/miscelanea")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductService productService;

    // GET
    @GetMapping("products")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("product/{id}")
    public Product getProductById(@PathVariable Long id){
        return productService.getProductById(id);
    }

    @GetMapping("productName/{productName}")
    public List<Product> getProductsByName(@PathVariable(name = "productName") String name){
        return productService.getProductsByName(name);
    }

    // POST
    @PostMapping("newProduct")
    public void addNewProduct(@RequestBody Product product) {
        productService.addNewProduct(product);
    }

    // DELETE
    @DeleteMapping("products/{product_IDs}")
    public void deleteProductById(@PathVariable List<Long> product_IDs) {
        productService.deleteProductsById(product_IDs);
    }

    /*
    @DeleteMapping("product/{id}")
    public void deleteProductById(@PathVariable("id") Long product_ID) {
        System.out.println(product_ID);
    }
    */
}
