export type Status = 'ACTIVE' | 'PENDING' | 'CANCELLED' | 'DROPPED_OUT'

export interface BadgeProps {
  status: Status
}

