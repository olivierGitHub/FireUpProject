package com.rest;

import com.Calcul;
import home.service.UserWebService;
import socialnetwork.SocialNetwork;
import socialnetwork.service.SocialNetworkWebService;
import video.service.VideoWebService;
import website.service.WebsiteWebService;


import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

public class Rest extends Application {
    private Set<Object> singletons = new HashSet<Object>();

    public Rest() {

        singletons.add(new Calcul());
        singletons.add(new UserWebService());
        singletons.add(new VideoWebService());
        singletons.add(new WebsiteWebService());
        singletons.add(new SocialNetworkWebService());
    }

    @Override
    public Set<Object> getSingletons() {
        return singletons;
    }
}




