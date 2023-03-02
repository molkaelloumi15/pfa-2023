package ENSIT.GeniInfo1.PFA1.repository;

import ENSIT.GeniInfo1.PFA1.model.Employe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeRepo extends JpaRepository<Employe,Integer> {
}
