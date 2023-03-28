package ENSIT.GeniInfo1.PFA1.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Bureau implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private int numBureau;

    private double surface;

    @ManyToOne(targetEntity = Departement.class)
    @JoinColumn(nullable = true, name = "numDep")
    private Departement departement;

    public Bureau() {}

    public int getNumBureau() {
        return numBureau;
    }

    public void setNumBureau(int numBureau) {
        this.numBureau = numBureau;
    }

    public double getSurface() {
        return surface;
    }

    public void setSurface(double surface) {
        this.surface = surface;
    }

    public Departement getDepartement() {
        return departement;
    }

    public void setDepartement(Departement departement) {
        this.departement = departement;
    }

    @Override
    public String toString() {
        return "Bureau{" +
                "numBureau=" + numBureau +
                ", surface=" + surface +
                ", departement=" + departement +
                '}';
    }
}