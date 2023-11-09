from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


class CustomManager(BaseUserManager):
    def create_user(self, email, username, password=None, confirm_password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            password=password,
            username=username,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser):
    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True,
    )
    username = models.CharField(max_length=200, unique=True, blank=True)
    first_name = models.CharField(max_length=200, blank=True, null=True)
    last_name = models.CharField(max_length=200, blank=True, null=True)
    password = models.CharField(max_length=255)
    confirm_password = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = CustomManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    
    
    class Meta:
        ordering = ('-date_joined', )

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return self.is_admin

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True
    
    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin
    

class Address(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.DO_NOTHING)
    mobile = models.CharField(max_length=16)
    state = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    postal_address = models.TextField()
    postal_code = models.PositiveBigIntegerField(blank=True, null=True)
    state = models.CharField(max_length=120)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Addresses'
        ordering = ('-created_at', )

    def __str__(self):
        return self.user.username
