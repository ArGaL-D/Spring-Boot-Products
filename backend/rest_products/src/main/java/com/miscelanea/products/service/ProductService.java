package com.miscelanea.products.service;

import com.miscelanea.products.entity.Product;
import com.miscelanea.products.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    // GET
    public Product getProductById(Long id){
        Product product = productRepository.findById(id).orElseThrow(
                () -> new RuntimeException("The id [" + id + "] does not exist")
        );
        return product;
    }

    public List<Product> getProductsByName(String name) {
        if (name == null || name.length() == 0){
            throw new IllegalStateException("[+] The NAME is empty");
        }
        return productRepository.getProductsByName(name);
    }

    // POST
    public void addNewProduct(Product product){
        if (product.getName().length() == 0 || product.getName() == null &&
            product.getDetails().length() == 0 || product.getDetails() == null) {
            throw new IllegalStateException("Hay valores incompletos y/o vacios");
        }
        productRepository.save(product);
    }

    // DELETE
    @Transactional
    public void deleteProductsById(List<Long> product_IDs){
        for (Long id: product_IDs) {
            if (!productRepository.existsById(id)){
                throw new IllegalStateException("No existe el ID ("+ id +")");
            }
            productRepository.deleteById(id);
        }
    }

}
