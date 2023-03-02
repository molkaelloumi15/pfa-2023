package ENSIT.GeniInfo1.PFA1.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class AvoirEmpEtud implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private int IdAvoirEmpEtud;

    @ManyToOne(targetEntity = Employe.class)
    @JoinColumn(nullable = false, name = "numEmp")
    private Employe employe;

    @ManyToOne(targetEntity = Etude.class)
    @JoinColumn(nullable = false, name = "idEtude")
    private Etude etude;

    private Date date;

    private float salaire ;

    public AvoirEmpEtud() {}

    public int getIdAvoirEmpEtud() {
        return IdAvoirEmpEtud;
    }

    public void setIdAvoirEmpEtud(int idAvoirEmpEtud) {
        IdAvoirEmpEtud = idAvoirEmpEtud;
    }

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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
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
                "IdAvoirEmpEtud=" + IdAvoirEmpEtud +
                ", employe=" + employe +
                ", etude=" + etude +
                ", date=" + date +
                ", salaire=" + salaire +
                '}';
    }
}
