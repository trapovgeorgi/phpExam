<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitc4ddbccb577c1d633803b0ed26c63e2d
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitc4ddbccb577c1d633803b0ed26c63e2d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitc4ddbccb577c1d633803b0ed26c63e2d::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitc4ddbccb577c1d633803b0ed26c63e2d::$classMap;

        }, null, ClassLoader::class);
    }
}
