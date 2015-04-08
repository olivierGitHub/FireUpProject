package website.dataAccess;

import com.dao.DAO;
import video.Video;
import website.Website;

import javax.persistence.*;
import java.util.List;
import java.util.StringTokenizer;

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

    private String createSQL(String sql){
        String createdSQL = "select * from website where listTagsWebsite like '%dummyArequestBtoCsetDfirstEiteratioFnotGsupposedHtoIbeJfound%'";
        StringTokenizer st = new StringTokenizer(sql);
        while (st.hasMoreElements()) {
            createdSQL = createdSQL + " or listTagsWebsite like '%" + st.nextElement() + "%'";
        }
        return createdSQL;
    }

    @Override
    public List<Website> readSelected(String param) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        List<Website> listWebsites = null;

        try{
            t.begin();
            String sql = createSQL(param);
            Query query = em.createNativeQuery(sql, Website.class);
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


    public List<Website> readAll() {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        List<Website> listWebsites = null;

        try{
            t.begin();
            String sql = "select w from Website w order by idWebsite DESC";
            TypedQuery query = em.createQuery(sql, Website.class).setMaxResults(5);
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

