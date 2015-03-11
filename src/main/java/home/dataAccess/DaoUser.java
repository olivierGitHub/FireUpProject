package home.dataAccess;

import com.dao.DAO;
import home.User;

import javax.persistence.*;
import java.util.List;

/**
 * Created by oliver on 17/12/14.
 */
public class DaoUser implements DAO<User> {

    private EntityManagerFactory emf;

    private static final DaoUser instance = new DaoUser();
    private DaoUser(){
        emf = Persistence.createEntityManagerFactory("NewPersistenceUnit");

    }
    public static DaoUser getInstance(){
        return instance;
    }


    @Override
    public int create(User user) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        int id = 0;

        try{
            t.begin();
            em.persist(user);
            em.flush();
            id = user.getId_user();
            t.commit();
            return id;
        }catch(Exception ex){
            System.out.println("SOUCI lors de la persistence des données vers le référentiel");
            ex.printStackTrace();
        }finally {
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return id;
    }

    @Override
    public User read(int id) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        User user = null;

        try{
            t.begin();
            user = em.find(User.class, id);
            t.commit();
            return user;
        }catch(Exception ex){
            System.out.println("SOUCI lors de la lecture du référentiel");
            ex.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return user;
    }

    @Override
    public void update(User user) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();

        try{
            t.begin();
            em.merge(user);
            t.commit();
        }catch(Exception ex){
            System.out.println("SOUCI lors de la mise à jour du référentiel");
            ex.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
    }

    @Override
    public void delete(User user) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        try{
            t.begin();
            em.remove(user);
            t.commit();
        }catch(Exception ex){
            System.out.println("SOUCI lors de la suppression d'un objet du référentiel");
            ex.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
    }

    @Override
    public List<User> readSelected(String sql) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        List<User> listUser = null;
        try{
            t.begin();
            TypedQuery<User> tq = em.createQuery(sql, User.class);
            listUser = tq.getResultList();
            t.commit();
            return listUser;
        }catch(Exception ex){
            System.out.println("SOUCI lors de l'acquisition de données spécifiques issues du référentiel");
            ex.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return listUser;
    }

    public User authenticateUser(String username, String password){
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        User retrievedUser = null;

        try{
            t.begin();
            String sql = "select e from User e where e.username = :username and e.password = :password";
            TypedQuery<User> query = em.createQuery(sql, User.class);
                query.setParameter("username", username);
                query.setParameter("password", password);
            retrievedUser = query.getSingleResult();
            t.commit();
        }catch(Exception ex){
            System.out.println("SOUCI lors de l'acquisition de l'authentification d'un utilisateur");
            ex.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return retrievedUser;
    }













}
