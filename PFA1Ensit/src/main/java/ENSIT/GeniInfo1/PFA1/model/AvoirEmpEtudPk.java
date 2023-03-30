package ENSIT.GeniInfo1.PFA1.model;

import java.io.Serializable;
import java.util.Objects;

public class AvoirEmpEtudPk implements Serializable {

    private Integer employe;
    private Integer etude;
    private Integer year;

    public AvoirEmpEtudPk() {
    }

    public AvoirEmpEtudPk(Integer employe, Integer etude, Integer year) {
        this.employe = employe;
        this.etude = etude;
        this.year= year;
    }

    public Integer getEmploye() {
        return employe;
    }

    public void setEmploye(Integer employe) {
        this.employe = employe;
    }

    public Integer getEtude() {
        return etude;
    }

    public void setEtude(Integer etude) {
        this.etude = etude;
    }

    public Integer getYear() {
        return year;
    }

    public void setDate(Integer year) {
        this.year = year;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof AvoirEmpEtudPk)) return false;
        AvoirEmpEtudPk that = (AvoirEmpEtudPk) o;
        return Objects.equals(employe, that.employe) && Objects.equals(etude, that.etude) && Objects.equals(year, that.year);
    }

    @Override
    public int hashCode() {
        return Objects.hash(employe, etude, year);
    }
}
