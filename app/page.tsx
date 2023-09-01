'use client';
import { UserProfile } from '@/common/types';
import LoadMore from '@/components/LoadMore';
import Loading from '@/components/Loading';
import UserCard from '@/components/UserCard';
import { getAllUsers } from '@/libs/actions';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [usersPerPage, setUsersPerPage] = useState(6);
  const [data, setData] = useState<UserProfile[]>([]);
  const lastUserIndex = usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = data.slice(firstUserIndex, lastUserIndex);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await getAllUsers();
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    setIsLoading(false);
  });

  return (
    <section className="flex-start flex-col paddings mb-16">
      {isLoading ? (
        <div className="flexCenter h-screen">
          <Loading />
        </div>
      ) : (
        <div>
          <section className="users-grid">
            {currentUsers.map((user) => (
              <UserCard
                avatar={user.avatar}
                email={user.email}
                first_name={user.first_name}
                last_name={user.last_name}
                id={user.id}
              />
            ))}
          </section>
          <LoadMore
            totalUsers={data.length}
            usersPerPage={usersPerPage}
            setUsersPerPage={setUsersPerPage}
          />
        </div>
      )}
    </section>
  );
};

export default Home;
