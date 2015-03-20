package com.dao;

import java.util.List;

/**
 * Created by oliver on 17/12/14.
 */
public interface DAO<T> {

    int create(T obj);
    T read(int i);
    void update(int i);
    void delete(T obj);


    List<T> readSelected(String sql);

}
