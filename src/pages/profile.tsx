import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { User, Mail, Phone, MapPin, Save, Edit3 } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import toast from 'react-hot-toast'

interface ProfileForm {
  full_name: string
  email: string
  phone: string
  address: string
}

interface UserProfile {
  id: string
  email: string
  full_name: string
  phone: string | null
  address: string | null
  created_at: string
}

export default function Profile() {
  const { user } = useAuth()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<ProfileForm>()

  useEffect(() => {
    if (user) {
      loadProfile()
    }
  }, [user])

  const loadProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', user!.id)
        .single()

      if (error) throw error

      setProfile(data)
      reset({
        full_name: data.full_name || '',
        email: data.email || '',
        phone: data.phone || '',
        address: data.address || ''
      })
    } catch (error) {
      console.error('Error loading profile:', error)
      toast.error('Failed to load profile')
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (data: ProfileForm) => {
    setSaving(true)
    try {
      const { error } = await supabase
        .from('users')
        .update({
          full_name: data.full_name,
          phone: data.phone,
          address: data.address
        })
        .eq('id', user!.id)

      if (error) throw error

      // Update email through Supabase auth if it changed
      if (data.email !== profile?.email) {
        const { error: emailError } = await supabase.auth.updateUser({
          email: data.email
        })

        if (emailError) throw emailError
        toast.success('Profile updated! Please check your email to confirm the new email address.')
      } else {
        toast.success('Profile updated successfully!')
      }

      setIsEditing(false)
      loadProfile()
    } catch (error: any) {
      console.error('Error updating profile:', error)
      toast.error(error.message || 'Failed to update profile')
    } finally {
      setSaving(false)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    if (profile) {
      reset({
        full_name: profile.full_name || '',
        email: profile.email || '',
        phone: profile.phone || '',
        address: profile.address || ''
      })
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-600">Please sign in to view your profile.</p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading profile...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50/30 py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-red-200/15 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
            My <span className="gradient-text">Profile</span>
          </h1>
          <p className="text-gray-700 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Manage your account information and preferences
          </p>
        </div>

        <div className="card-premium p-8 animate-scale-in">
          {/* Profile Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-4 rounded-full">
                <User className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{profile?.full_name || 'User'}</h2>
                <p className="text-gray-600">Member since {new Date(profile?.created_at || '').toLocaleDateString()}</p>
              </div>
            </div>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center space-x-2 btn-secondary"
              >
                <Edit3 className="h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            )}
          </div>

          {/* Profile Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="h-4 w-4 inline mr-2" />
                Full Name *
              </label>
              {isEditing ? (
                <input
                  type="text"
                  {...register('full_name', { required: 'Full name is required' })}
                  className="input-premium"
                  placeholder="Enter your full name"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-lg text-gray-900">
                  {watch('full_name') || 'Not provided'}
                </div>
              )}
              {errors.full_name && (
                <p className="text-red-600 text-sm mt-1">{errors.full_name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="h-4 w-4 inline mr-2" />
                Email Address *
              </label>
              {isEditing ? (
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="input-premium"
                  placeholder="Enter your email address"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-lg text-gray-900">
                  {watch('email') || 'Not provided'}
                </div>
              )}
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="h-4 w-4 inline mr-2" />
                Phone Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  {...register('phone')}
                  className="input-premium"
                  placeholder="Enter your phone number"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-lg text-gray-900">
                  {watch('phone') || 'Not provided'}
                </div>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="h-4 w-4 inline mr-2" />
                Default Delivery Address
              </label>
              {isEditing ? (
                <textarea
                  {...register('address')}
                  rows={3}
                  className="input-premium"
                  placeholder="Enter your default delivery address"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-lg text-gray-900 min-h-[80px]">
                  {watch('address') || 'Not provided'}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            {isEditing && (
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                <button
                  type="submit"
                  disabled={saving}
                  className="btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {saving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      <span>Save Changes</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            )}
          </form>

          {/* Account Info */}
          {!isEditing && (
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Account ID:</span>
                  <p className="font-mono text-gray-900">{user.id.slice(0, 8)}...</p>
                </div>
                <div>
                  <span className="text-gray-600">Email Verified:</span>
                  <p className="text-gray-900">
                    {user.email_confirmed_at ? (
                      <span className="text-green-600">✓ Verified</span>
                    ) : (
                      <span className="text-yellow-600">⚠ Pending</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}