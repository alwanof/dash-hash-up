const API_BASE_URL = 'https://dev-api.uplines.com';

export async function getUserCount(): Promise<number> {
  try {
    const response = await fetch(`${API_BASE_URL}/users/count`);
    if (!response.ok) {
      throw new Error('Failed to fetch user count');
    }
    const data = await response.json();
    return data.count;
  } catch (error) {
    console.error('Error fetching user count:', error);
    throw error;
  }
}