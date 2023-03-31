package ENSIT.GeniInfo1.PFA1;

import ENSIT.GeniInfo1.PFA1.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.springframework.transaction.annotation.Transactional;
@Component
@Order(1)
public class DatabaseInitializer implements CommandLineRunner {

    @Autowired
    private EntityManager entityManager;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        Query query = entityManager.createQuery("select count(*) from User ");
        Long count = (Long) query.getSingleResult();
        if(count == 0){
            User user = new User();
            user.setMail("admin@admin.admin");
            user.setPass("admin");
            user.setUsername("admin");
            user.setFonction("Directeur");
            Departement departement = new Departement();
            departement.setNumDep(1);
            departement.setIntituleDep("Technique");
            departement.setBudgetDep(0);
            departement.setNumDep(1);
            Bureau bureau = new Bureau();
            bureau.setNumBureau(1);
            bureau.setSurface(0);
            bureau.setDepartement(departement);
            PosteTelephonique posteTelephonique = new PosteTelephonique();
            posteTelephonique.setNumeroAppel(12345678);
            posteTelephonique.setBureau(bureau);
            Employe employe = new Employe();
            employe.setNumEmp(1);
            employe.setNomEmp("admin");
            employe.setFonctionEmp("Directeur");
            employe.setPosteTelephonique(posteTelephonique);
            entityManager.persist(user);
            entityManager.merge(departement);
            entityManager.merge(bureau);
            entityManager.merge(posteTelephonique);
            entityManager.merge(employe);
            entityManager.flush();
        }

    }
}

