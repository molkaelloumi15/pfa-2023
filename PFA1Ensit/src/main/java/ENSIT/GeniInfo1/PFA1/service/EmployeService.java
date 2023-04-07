package ENSIT.GeniInfo1.PFA1.service;

import ENSIT.GeniInfo1.PFA1.Exception.UserNotFoundException;
import ENSIT.GeniInfo1.PFA1.model.Employe;
import ENSIT.GeniInfo1.PFA1.model.ProjetRecherche;
import ENSIT.GeniInfo1.PFA1.repository.EmployeRepo;
import ENSIT.GeniInfo1.PFA1.repository.ProjetRechercheRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeService {

    private final EmployeRepo EmployeRepo;
    private final ProjetRechercheRepo projetRechercheRepo;

    @Autowired
    public EmployeService(EmployeRepo employeRepo, ProjetRechercheRepo projetRechercheRepo) {
        this.EmployeRepo = employeRepo;
        this.projetRechercheRepo = projetRechercheRepo;
    }
    public Employe addEmploye(Employe employe) {
        System.out.println(employe);
        for (ProjetRecherche projet : employe.getProjetRecherche()) {
            ProjetRecherche existingProjet = projetRechercheRepo.findById(projet.getNumProjetRecherche())
                    .orElseThrow(() -> new UserNotFoundException("Projet with the id = " + projet.getNumProjetRecherche() + " was not found"));
            projetRechercheRepo.save(existingProjet);
        }
        System.out.println(employe);
        return EmployeRepo.save(employe);
    }
//    public Employe addEmploye(Employe Employe) {return this.EmployeRepo.save(Employe);}

    public Employe findEmployeById (Integer id) { return this.EmployeRepo.findById(id).orElseThrow(() -> new UserNotFoundException("Employe with the id = " + id + " was not found"));}

    public List<Employe> findAllEmploye() {return this.EmployeRepo.findAll();}

    public List<Object[]> countEmployeByDep() {return this.EmployeRepo.countEmployeByDep();}

    public List<Object[]> countEmployeByProjetRecherche() {
        List<Object[]> results = new ArrayList<>();
        String query = "SELECT COUNT(num_emp), num_projet_recherche FROM emp_pro GROUP BY num_projet_recherche";
        try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/PFA2023", "root", "Magali_1984");
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {
            while (rs.next()) {
                int count = rs.getInt(1);
                int numProjetRecherche = rs.getInt(2);
                Object[] row = new Object[]{count, numProjetRecherche};
                results.add(row);
            }
        } catch (SQLException ex) {
            // handle exception
        }
        return results;
    }



//    public Employe updateEmploye(Employe Employe) {return EmployeRepo.save(Employe);}

    public Employe updateEmploye(Employe employe) {
        Employe existingEmploye = EmployeRepo.findById(employe.getNumEmp())
                .orElseThrow(() -> new UserNotFoundException("Employe with the id = " + employe.getNumEmp() + " was not found"));
        existingEmploye.setNomEmp(employe.getNomEmp());
        existingEmploye.setFonctionEmp(employe.getFonctionEmp());
        existingEmploye.setPosteTelephonique(employe.getPosteTelephonique());
        existingEmploye.setProjetRecherche(employe.getProjetRecherche());
        for (ProjetRecherche projet : employe.getProjetRecherche()) {
            ProjetRecherche existingProjet = projetRechercheRepo.findById(projet.getNumProjetRecherche())
                    .orElseThrow(() -> new UserNotFoundException("Projet with the id = " + projet.getNumProjetRecherche() + " was not found"));
            projetRechercheRepo.save(existingProjet);
        }
        return EmployeRepo.save(existingEmploye);
    }

    public void deleteEmploye(Integer id) {this.EmployeRepo.deleteById(id);}

}
