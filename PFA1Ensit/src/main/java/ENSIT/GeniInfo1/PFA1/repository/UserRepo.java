package ENSIT.GeniInfo1.PFA1.repository;

import ENSIT.GeniInfo1.PFA1.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,String> {
}
