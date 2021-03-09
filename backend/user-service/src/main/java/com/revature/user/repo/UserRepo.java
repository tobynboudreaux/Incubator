package com.revature.user.repo;

import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.user.model.User;

@Repository
@Transactional
public interface UserRepo extends JpaRepository<User,Integer>{

	public User findByUsernameAndPassword(String username, String password);
}
