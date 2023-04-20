export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Tests: {
        Row: {
          id: number
          questions: number[]
          type: string | null
        }
        Insert: {
          id?: number
          questions: number[]
          type?: string | null
        }
        Update: {
          id?: number
          questions?: number[]
          type?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
