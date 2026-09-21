import prisma from '../services/prisma.js';

export async function getProfile(req, res) {
  try {
    const userWithProfile = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        profile: true, 
      },
    });

    res.status(200).json({ user: userWithProfile });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error: error.message });
  }
}

export async function updateProfile(req, res) {
  try {
    const { targetRoles, skills, experienceLevel, minSalary, maxSalary, bio } = req.body;

    const profile = await prisma.profile.upsert({
      where: {
        userId: req.user.id,
      },
      update: {
        targetRoles: targetRoles || [],
        skills: skills || [],
        experienceLevel,
        minSalary: minSalary ? parseInt(minSalary, 10) : null,
        maxSalary: maxSalary ? parseInt(maxSalary, 10) : null,
        bio,
      },
      create: {
        userId: req.user.id,
        targetRoles: targetRoles || [],
        skills: skills || [],
        experienceLevel,
        minSalary: minSalary ? parseInt(minSalary, 10) : null,
        maxSalary: maxSalary ? parseInt(maxSalary, 10) : null,
        bio,
      },
    });

    res.status(200).json({
      message: 'Profile updated successfully',
      profile,
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Error updating profile', error: error.message });
  }
}

export async function getAllUsers(req, res) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        profile: true,
      },
    });

    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
}
