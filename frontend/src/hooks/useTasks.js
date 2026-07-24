import { useState, useEffect, useCallback } from 'react';
import * as taskApi from '../api/tasks';

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchTasks = useCallback(async () => {
    setError(null);
    try {
      setTasks(await taskApi.getTasks());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTask = async (title) => {
    setSubmitting(true);
    setError(null);
    try {
      const newTask = await taskApi.createTask(title);
      setTasks((prev) => [newTask, ...prev]);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setSubmitting(false);
    }
  };

  const toggleTask = async (id, completed) => {
    setError(null);
    setTasks((prev) =>
      prev.map((t) => (t._id === id ? { ...t, completed } : t))
    );
    try {
      await taskApi.updateTask(id, { completed });
    } catch (err) {
      setError(err.message);
      fetchTasks();
    }
  };

  const removeTask = async (id) => {
    setError(null);
    try {
      await taskApi.deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    tasks,
    loading,
    error,
    submitting,
    fetchTasks,
    addTask,
    toggleTask,
    removeTask,
  };
}
