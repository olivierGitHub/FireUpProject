package socialnetwork.dataAccess;

import com.dao.DAO;
import socialnetwork.SocialNetwork;

import javax.persistence.*;
import java.util.List;
import java.util.StringTokenizer;

/**
 * Created by oliver on 20/03/15.
 */
public class DaoSocialNetwork implements DAO<SocialNetwork>{
    private static DaoSocialNetwork instance = new DaoSocialNetwork();
    public static DaoSocialNetwork getInstance(){
        return instance;
    }
    private EntityManagerFactory emf;
    private DaoSocialNetwork(){
        emf = Persistence.createEntityManagerFactory("NewPersistenceUnit");
    }

    @Override
    public int create(SocialNetwork socialNetwork) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        int id = 0;

        try{
            t.begin();
            em.persist(socialNetwork);
            em.flush();
            id = socialNetwork.getIdSocialNetwork();
            t.commit();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return id;
    }

    @Override
    public SocialNetwork read(int id) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        SocialNetwork socialNetwork = null;

        try{
            t.begin();
            socialNetwork = em.find(SocialNetwork.class,id);
            t.commit();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return socialNetwork;
    }

    @Override
    public void update(int id) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();

        try{
            t.begin();
            SocialNetwork socialNetwork = em.find(SocialNetwork.class,id);
            em.merge(socialNetwork);
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
    public void delete(SocialNetwork socialNetwork) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();

        try{
            t.begin();
            em.remove(socialNetwork);
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
        String createdSQL = "select * from socialnetwork where listTagsSocialNetwork like '%dummyArequestBtoCsetDfirstEiteratioFnotGsupposedHtoIbeJfound%'";
        StringTokenizer st = new StringTokenizer(sql);
        while (st.hasMoreElements()) {
            createdSQL = createdSQL + " or listTagsSocialNetwork like '%" + st.nextElement() + "%'";
        }
        return createdSQL;
    }

    @Override
    public List<SocialNetwork> readSelected(String param) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        List<SocialNetwork> listSocialNetworks = null;

        try{
            t.begin();
            String sql = createSQL(param);
            Query query = em.createNativeQuery(sql, SocialNetwork.class);
            listSocialNetworks = query.getResultList();
            t.commit();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return listSocialNetworks;
    }

    public List<SocialNetwork> readAll() {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        List<SocialNetwork> listSocialNetworks = null;

        try{
            t.begin();
            String sql = "select sc from SocialNetwork sc order by idSocialNetwork DESC";
            TypedQuery query = em.createQuery(sql, SocialNetwork.class).setMaxResults(5);
            listSocialNetworks = query.getResultList();
            t.commit();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return listSocialNetworks;
    }


}