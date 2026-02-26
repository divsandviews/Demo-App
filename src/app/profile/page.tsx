"use client";

import { useState } from "react";
import Link from "next/link";

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  location: string;
  website: string;
}

const defaultProfile: UserProfile = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  bio: "Software enthusiast and demo app user.",
  location: "San Francisco, CA",
  website: "https://example.com",
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<UserProfile>(defaultProfile);
  const [saved, setSaved] = useState(false);

  function handleEdit() {
    setDraft(profile);
    setEditing(true);
    setSaved(false);
  }

  function handleCancel() {
    setEditing(false);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setDraft({ ...draft, [e.target.name]: e.target.value });
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setProfile(draft);
    setEditing(false);
    setSaved(true);
  }

  return (
    <div className="flex min-h-screen items-start justify-center bg-white dark:bg-black px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-3xl font-semibold text-black dark:text-white mb-8">
          My Profile
        </h1>

        {saved && !editing && (
          <div className="mb-6 rounded-md bg-green-50 dark:bg-green-900/30 px-4 py-3 text-sm text-green-700 dark:text-green-300">
            Profile updated successfully.
          </div>
        )}

        {editing ? (
          <form onSubmit={handleSave} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={draft.name}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={draft.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={3}
                value={draft.bio}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={draft.location}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Website
              </label>
              <input
                id="website"
                name="website"
                type="url"
                value={draft.website}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-5">
            <dl className="space-y-5">
              <ProfileField label="Name" value={profile.name} />
              <ProfileField label="Email" value={profile.email} />
              <ProfileField label="Bio" value={profile.bio} />
              <ProfileField label="Location" value={profile.location} />
              <ProfileField label="Website" value={profile.website} />
            </dl>

            <div className="pt-2">
              <button
                onClick={handleEdit}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Edit Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-black dark:text-white">{value}</dd>
    </div>
  );
}
