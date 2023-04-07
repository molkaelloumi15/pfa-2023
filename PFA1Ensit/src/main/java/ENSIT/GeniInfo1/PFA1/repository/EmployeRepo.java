package ENSIT.GeniInfo1.PFA1.repository;

import ENSIT.GeniInfo1.PFA1.model.Employe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeRepo extends JpaRepository<Employe,Integer> {

    @Query("SELECT count(e.numEmp), d.numDep FROM Employe e JOIN e.posteTelephonique pt JOIN pt.bureau b JOIN b.departement d GROUP BY d.numDep")
    List<Object[]> countEmployeByDep();
}
