package ENSIT.GeniInfo1.PFA1.model;


import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
public class ProjetRecherche implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private int numProjetRecherche;

    private String intituleProjetRecherche;

    private float budgetProjetRecherche;

    @ManyToOne(targetEntity = Departement.class)
    @JoinColumn(nullable = true, name = "numDep")
    private Departement departement;

    @ManyToMany(mappedBy = "projetRecherche")
    private Set<Employe> employes;

//    @ManyToMany(mappedBy = "projetRecherche")
//    private List<Employe> employe;

    public ProjetRecherche() {
    }

    public int getNumProjetRecherche() {
        return numProjetRecherche;
    }

    public void setNumProjetRecherche(int numProjetRecherche) {
        this.numProjetRecherche = numProjetRecherche;
    }

    public String getIntituleProjetRecherche() {
        return intituleProjetRecherche;
    }

    public void setIntituleProjetRecherche(String intituleProjetRecherche) {
        this.intituleProjetRecherche = intituleProjetRecherche;
    }

    public float getBudgetProjetRecherche() {
        return budgetProjetRecherche;
    }

    public void setBudgetProjetRecherche(float budgetProjetRecherche) {
        this.budgetProjetRecherche = budgetProjetRecherche;
    }

    public Departement getDepartement() {
        return departement;
    }

    public void setDepartement(Departement departement) {
        this.departement = departement;
    }

//    public Set<Employe> getEmployes() {
//        return employes;
//    }
//
//    public void setEmployes(Set<Employe> employes) {
//        this.employes = employes;
//    }

    @Override
    public String toString() {
        return "ProjetRecherche{" +
                "numProjetRecherche=" + numProjetRecherche +
                ", intituleProjetRecherche='" + intituleProjetRecherche + '\'' +
                ", budgetProjetRecherche=" + budgetProjetRecherche +
                ", departement=" + departement +
                '}';
    }
}