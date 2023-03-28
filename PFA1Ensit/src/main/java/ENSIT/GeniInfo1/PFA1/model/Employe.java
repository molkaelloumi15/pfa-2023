package ENSIT.GeniInfo1.PFA1.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Employe implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private int numEmp;

    private String nomEmp;

    private String fonctionEmp;

    @ManyToOne(targetEntity = PosteTelephonique.class)
    @JoinColumn(nullable = true, name = "numeroAppel")
    private PosteTelephonique posteTelephonique ;


    @ManyToMany
    @JoinTable(
            name = "emp_pro",
            joinColumns = @JoinColumn(name = "numEmp"),
            inverseJoinColumns = @JoinColumn(name = "numProjetRecherche")
    )
    private Set<ProjetRecherche> projetRecherche;

    public Employe() {
        this.projetRecherche = new HashSet<>();
    }

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

    public String getFonctionEmp() {
        return fonctionEmp;
    }

    public void setFonctionEmp(String fonctionEmp) {
        this.fonctionEmp = fonctionEmp;
    }

    public PosteTelephonique getPosteTelephonique() {
        return posteTelephonique;
    }

    public void setPosteTelephonique(PosteTelephonique posteTelephonique) {
        this.posteTelephonique = posteTelephonique;
    }

    public Set<ProjetRecherche> getProjetRecherche() {
        return projetRecherche;
    }

    public void setProjetRecherche(Set<ProjetRecherche> projetRecherche) {
        this.projetRecherche = projetRecherche;
    }

    @Override
    public String toString() {
        return "Employe{" +
                "numEmp=" + numEmp +
                ", nomEmp='" + nomEmp + '\'' +
                ", fonctionEmp='" + fonctionEmp + '\'' +
                ", posteTelephonique=" + posteTelephonique +
                ", projetRecherche= [" + projetRecherche.size() +
                "]}";
    }
}