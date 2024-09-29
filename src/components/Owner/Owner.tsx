import React from 'react';
import { useOwner } from '../../hooks/useOwner';

export interface OwnerProps {
    id: string
  }

export const Owner: React.FC<OwnerProps> = ({
    id,
}) => {
    const {data} = useOwner(id)
    if (!data || !data.owner) return null;

  return (
    <div>
        <ul >
            <li key={data.owner.id}>
                {data.owner.firstName} {data.owner.lastName}
            </li>
        </ul>
    </div>
    );
}
