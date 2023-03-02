package ENSIT.GeniInfo1.PFA1.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Etude implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private int idEtude;

    private String titreEtude ;

    public Etude() {
    }

    public int getIdEtude() {
        return idEtude;
    }

    public void setIdEtude(int idEtude) {
        this.idEtude = idEtude;
    }

    public String getTitreEtude() {
        return titreEtude;
    }

    public void setTitreEtude(String titreEtude) {
        this.titreEtude = titreEtude;
    }

    @Override
    public String toString() {
        return "Etude{" +
                "idEtude=" + idEtude +
                ", titreEtude='" + titreEtude + '\'' +
                '}';
    }
}
