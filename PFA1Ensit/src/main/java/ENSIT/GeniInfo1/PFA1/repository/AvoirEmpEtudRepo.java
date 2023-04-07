package ENSIT.GeniInfo1.PFA1.repository;

import ENSIT.GeniInfo1.PFA1.model.AvoirEmpEtud;
import ENSIT.GeniInfo1.PFA1.model.AvoirEmpEtudPk;
import ENSIT.GeniInfo1.PFA1.model.Employe;
import ENSIT.GeniInfo1.PFA1.model.Etude;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AvoirEmpEtudRepo extends JpaRepository<AvoirEmpEtud, AvoirEmpEtudPk> {
    List<AvoirEmpEtud> findAllByEmploye_NumEmp(int employe);
    List<AvoirEmpEtud> findAllByEtude_IdEtude(int etude);
    @Query("SELECT count(employe.numEmp), etude.idEtude from AvoirEmpEtud group by etude.idEtude")
    List<Object[]> countEmployeByEtude();
}