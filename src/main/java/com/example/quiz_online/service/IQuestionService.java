package com.example.quiz_online.service;

import com.example.quiz_online.model.Question;
import org.springframework.data.crossstore.ChangeSetPersister;

import java.util.List;
import java.util.Optional;

public interface IQuestionService {
    Question createQuestion(Question question);
    List<Question> getAllQuestion();
    Optional<Question> getQuestionById(Long id);
    List<String> getAllSubjects();
    Question updateQuestion(Long id,Question question) throws ChangeSetPersister.NotFoundException;
    void deleteQuestion(Long id);
    List<Question> getQuestionForUsers(Integer numOfQuestions,String subject  );





}
