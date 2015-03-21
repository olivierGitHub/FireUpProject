package website.dataAccess;

import com.dao.DAO;
import website.Website;

import javax.persistence.*;
import java.util.List;

/**
 * Created by oliver on 20/03/15.
 */
public class DaoWebsite implements DAO<Website> {

    private static DaoWebsite instance = new DaoWebsite();
    public static DaoWebsite getInstance(){
        return instance;
    }
    private EntityManagerFactory emf;

    private DaoWebsite(){
        emf = Persistence.createEntityManagerFactory("NewPersistenceUnit");
    }

    @Override
    public int create(Website website) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        int id = 0;

        try{
            t.begin();
            em.persist(website);
            em.flush();
            id = website.getIdWebsite();
            t.commit();
        }catch(Exception e){
            e.printStackTrace();;
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return id;
    }

    @Override
    public Website read(int id) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        Website website = null;

        try{
            t.begin();
            website = em.find(Website.class,id);
            t.commit();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return website;
    }

    @Override
    public void update(int id) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();

        try{
            t.begin();
            Website website = em.find(Website.class,id);
            em.merge(website);
            t.commit();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
    }

    @Override
    public void delete(Website website) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();

        try{
            t.begin();
            em.remove(website);
            t.commit();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
    }

    @Override
    public List<Website> readSelected(String sql) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        List<Website> listWebsites = null;

        try{
            t.begin();
            TypedQuery query = em.createQuery(sql, Website.class);
            listWebsites = query.getResultList();
            t.commit();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return listWebsites;
    }
}

