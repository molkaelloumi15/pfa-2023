package ENSIT.GeniInfo1.PFA1.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class PosteTelephonique implements Serializable {

    @Id
    @Column(nullable = false, updatable = false)
        private int numeroAppel;
    @ManyToOne(targetEntity = Bureau.class)
    @JoinColumn(nullable = true, name = "numBureau")
    private Bureau bureau;

    public PosteTelephonique() {}

    public int getNumeroAppel() {
        return numeroAppel;
    }

    public void setNumeroAppel(int numeroAppel) {
        this.numeroAppel = numeroAppel;
    }

    public Bureau getBureau() {
        return bureau;
    }

    public void setBureau(Bureau bureau) {
        this.bureau = bureau;
    }

    @Override
    public String toString() {
        return "PosteTelephonique{" +
                "numeroAppel=" + numeroAppel +
                ", bureau=" + bureau +
                '}';
    }
}