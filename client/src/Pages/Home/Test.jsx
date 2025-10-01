import React, {useEffect, useState} from 'react';

const Test = () => {
  const [roles, setRoles] = useState ([]);

  useEffect (() => {
    fetch ('http://localhost:8080/api/v1/role/')
      .then (res => res.json ())
      .then (response => {
        console.log (response);
        setRoles (response.data);
      });
  }, []);

  return (
    <div>
      <h2>Roles</h2>
      <ul className="ml-10 list-disc p-4">
        {roles.map (role => (
          <li key={role.roleId}>
            {role.roleName} (ID: {role.roleId})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
