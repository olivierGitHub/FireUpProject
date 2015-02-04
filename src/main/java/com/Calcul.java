package com;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/calcul")
public class Calcul {

    @GET
    @Path("/hello")
    @Produces("text/html")
    public String giveHello(){
        return "<h1>HELLO WORLD Oli<h1>";
    }

    @GET
    @Produces("text/html")
    public int retourneUN(){
        return 1;
    }


    @GET
    @Path("/{operation}/{param1}/{param2}")
    @Produces("text/html")
    public String giveCalcul(@PathParam("operation") String op,
                             @PathParam("param1") int a, @PathParam("param1") int b){
        int c = 0;
        if (op.equals("add")){
            c=a+b;
        }
        else if (op.equals("sub")){
            c=a-b;
        }
        else if (op.equals("mul")){
            c=a*b;
        }
        else if (op.equals("div")){
            try{
                c=a/b;
            }catch (ArithmeticException e){
                System.out.println("Division impossible");
                e.printStackTrace();
            }
        }
        return "<h1>"+ c +"<h1>";
    }


}

