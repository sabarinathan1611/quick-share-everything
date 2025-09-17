export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      blog: {
        Row: {
          id: string
          slug: string
          title: string
          excerpt: string | null
          content: string
          author: string | null
          cover_image_url: string | null
          tags: string[] | null
          published: boolean
          published_at: string | null
          reading_time: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          excerpt?: string | null
          content: string
          author?: string | null
          cover_image_url?: string | null
          tags?: string[] | null
          published?: boolean
          published_at?: string | null
          reading_time?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          excerpt?: string | null
          content?: string
          author?: string | null
          cover_image_url?: string | null
          tags?: string[] | null
          published?: boolean
          published_at?: string | null
          reading_time?: number | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      cleanup_logs: {
        Row: {
          cleaned_at: string | null
          cleanup_reason: string
          file_size: number | null
          id: string
          share_id: string
          share_type: string
        }
        Insert: {
          cleaned_at?: string | null
          cleanup_reason: string
          file_size?: number | null
          id?: string
          share_id: string
          share_type: string
        }
        Update: {
          cleaned_at?: string | null
          cleanup_reason?: string
          file_size?: number | null
          id?: string
          share_id?: string
          share_type?: string
        }
        Relationships: []
      }
      shares: {
        Row: {
          code: string
          content: string | null
          created_at: string
          download_count: number
          encrypted_payload: string | null
          expires_at: string | null
          file_name: string | null
          file_path: string | null
          file_size: number | null
          is_encrypted: boolean | null
          max_downloads: number | null
          recovery_email: string | null
          type: Database["public"]["Enums"]["share_type"]
        }
        Insert: {
          code: string
          content?: string | null
          created_at?: string
          download_count?: number
          encrypted_payload?: string | null
          expires_at?: string | null
          file_name?: string | null
          file_path?: string | null
          file_size?: number | null
          is_encrypted?: boolean | null
          max_downloads?: number | null
          recovery_email?: string | null
          type: Database["public"]["Enums"]["share_type"]
        }
        Update: {
          code?: string
          content?: string | null
          created_at?: string
          download_count?: number
          encrypted_payload?: string | null
          expires_at?: string | null
          file_name?: string | null
          file_path?: string | null
          file_size?: number | null
          is_encrypted?: boolean | null
          max_downloads?: number | null
          recovery_email?: string | null
          type?: Database["public"]["Enums"]["share_type"]
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      cleanup_expired_shares: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      generate_unique_code: {
        Args: { code_length?: number }
        Returns: string
      }
      log_cleanup: {
        Args: {
          p_share_id: string
          p_share_type: string
          p_cleanup_reason: string
          p_file_size?: number
        }
        Returns: undefined
      }
    }
    Enums: {
      share_type: "clipboard" | "notepad" | "file"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      share_type: ["clipboard", "notepad", "file"],
    },
  },
} as const
