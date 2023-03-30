package ENSIT.GeniInfo1.PFA1.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@IdClass(AvoirEmpEtudPk .class)
public class AvoirEmpEtud implements Serializable {

    @Id
    @ManyToOne(targetEntity = Employe.class,cascade = CascadeType.DETACH)
    @JoinColumn(nullable = false, name = "numEmp")
    private Employe employe;

    @Id
    @ManyToOne(targetEntity = Etude.class,cascade = CascadeType.DETACH)
    @JoinColumn(nullable = false, name = "idEtude")
    private Etude etude;

    @Id
    private Integer year;

    private float salaire ;

    public AvoirEmpEtud() {}

    public Employe getEmploye() {
        return employe;
    }

    public void setEmploye(Employe employe) {
        this.employe = employe;
    }

    public Etude getEtude() {
        return etude;
    }

    public void setEtude(Etude etude) {
        this.etude = etude;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public float getSalaire() {
        return salaire;
    }

    public void setSalaire(float salaire) {
        this.salaire = salaire;
    }

    @Override
    public String toString() {
        return "AvoirEmpEtud{" +
                "employe=" + employe +
                ", etude=" + etude +
                ", year=" + year +
                ", salaire=" + salaire +
                '}';
    }
}