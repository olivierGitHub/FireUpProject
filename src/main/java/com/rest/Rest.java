package com.rest;

import com.Calcul;


import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

public class Rest extends Application {
    private Set<Object> singletons = new HashSet<Object>();

    public Rest() {

        singletons.add(new Calcul());

    }

    @Override
    public Set<Object> getSingletons() {
        return singletons;
    }
}




