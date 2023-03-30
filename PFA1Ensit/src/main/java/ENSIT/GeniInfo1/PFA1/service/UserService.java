package ENSIT.GeniInfo1.PFA1.service;

import ENSIT.GeniInfo1.PFA1.Exception.UserNotFoundException;
import ENSIT.GeniInfo1.PFA1.model.User;
import ENSIT.GeniInfo1.PFA1.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepo UserRepo;

    @Autowired

    public UserService(UserRepo UserRepo) {this.UserRepo = UserRepo;}

    public User addUser(User User) {return this.UserRepo.save(User);}

    public User findUserByMail (String id) { return this.UserRepo.findById(id).orElseThrow(() -> new UserNotFoundException("User with the id = " + id + " was not found"));}

    public List<User> findAllUser() {return this.UserRepo.findAll();}

    public User updateUser(User User) {return UserRepo.save(User);}

    public void deleteUser(String id) {this.UserRepo.deleteById(id);}

}
