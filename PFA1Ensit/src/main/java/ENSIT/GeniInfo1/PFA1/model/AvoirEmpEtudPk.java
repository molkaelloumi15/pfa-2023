package ENSIT.GeniInfo1.PFA1.model;


import java.io.Serializable;
import java.util.Objects;


public class AvoirEmpEtudPk implements Serializable {

    private int employe;
    private int etude;

    public AvoirEmpEtudPk() {
    }

    public AvoirEmpEtudPk(int employe, int etude) {
        this.employe = employe;
        this.etude = etude;
    }

    public int getEmploye() {
        return employe;
    }

    public void setEmploye(int employe) {
        this.employe = employe;
    }

    public int getEtude() {
        return etude;
    }

    public void setEtude(int etude) {
        this.etude = etude;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof AvoirEmpEtudPk)) return false;
        AvoirEmpEtudPk that = (AvoirEmpEtudPk) o;
        return employe == that.employe && etude == that.etude;
    }

    @Override
    public int hashCode() {
        return Objects.hash(employe, etude);
    }
}