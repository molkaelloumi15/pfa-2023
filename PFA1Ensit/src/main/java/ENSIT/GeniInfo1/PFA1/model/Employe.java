package ENSIT.GeniInfo1.PFA1.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Employe implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private int numEmp;

    private String nomEmp;

    @ManyToOne(targetEntity = Departement.class)
    @JoinColumn(nullable = false, name = "numDep")
    private Departement departement ;

    @ManyToOne(targetEntity = PosteTelephonique.class)
    @JoinColumn(nullable = false, name = "numeroAppel")
    private PosteTelephonique posteTelephonique ;

    @ManyToOne(targetEntity = ProjetRecherche.class)
    @JoinColumn(nullable = false, name = "numProjetRecherche")
    private ProjetRecherche projetRecherche;

    public Employe() {}

    public int getNumEmp() {
        return numEmp;
    }

    public void setNumEmp(int numEmp) {
        this.numEmp = numEmp;
    }

    public String getNomEmp() {
        return nomEmp;
    }

    public void setNomEmp(String nomEmp) {
        this.nomEmp = nomEmp;
    }

    public Departement getDepartement() {
        return departement;
    }

    public void setDepartement(Departement departement) {
        this.departement = departement;
    }

    public PosteTelephonique getPosteTelephonique() {
        return posteTelephonique;
    }

    public void setPosteTelephonique(PosteTelephonique posteTelephonique) {
        this.posteTelephonique = posteTelephonique;
    }

    public ProjetRecherche getProjetRecherche() {
        return projetRecherche;
    }

    public void setProjetRecherche(ProjetRecherche projetRecherche) {
        this.projetRecherche = projetRecherche;
    }


}
