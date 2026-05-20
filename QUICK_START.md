# 🚀 Quick Start - TiendaCel v2.0

## Tabla de Contenidos
1. [Verificación Rápida](#verificación-rápida)
2. [Ejecutar la Aplicación](#ejecutar-la-aplicación)
3. [Probar Ventas](#probar-ventas)
4. [Entender la Arquitectura](#entender-la-arquitectura)

---

## ✅ Verificación Rápida

### 1. Verificar que todo está en su lugar

```bash
# Tu estructura debe ser:
TiendaCelAPI/
├── frontend/
│   ├── public/
│   │   └── tiendacel.html          ✅ ACTUALIZADO con Google Apps Script
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   └── package.json
├── backend/
│   └── ...
├── host.json
└── INTEGRACION_APPS_SCRIPT.md      ✅ NUEVO - Tu guía de referencia
```

### 2. Verificar el URL del Google Apps Script

En `frontend/public/tiendacel.html`, línea ~305:

```javascript
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby5sJD1zP1mD_48qQ3dZKueHYEnkXSwJxcJ50ghJNEAguFUB012N_PYIyJe_PgfcQLuog/exec';
```

✅ **Este URL ya está configurado correctamente**

---

## 🎯 Ejecutar la Aplicación

### Opción 1: Desarrollo Local (Recomendado)

```bash
# En la carpeta frontend/
cd TiendaCelAPI/frontend

# Instalar dependencias (si no están instaladas)
npm install

# Iniciar servidor de desarrollo Vite
npm run dev

# Acceso: http://localhost:5173
```

### Opción 2: Usando Azure Functions

```bash
# En la carpeta raíz
npm install

# Iniciar funciones Azure
func start

# Acceso: http://localhost:7071
```

---

## 🛒 Probar Ventas

### Flujo Completo en 5 Pasos

#### **PASO 1: Login**
```
usuario: vendedor1
contraseña: cualquiera (o dejar vacío para modo demo)
```
Haz clic en "Entrar" → Verás el dashboard

#### **PASO 2: Navega a "Ventas" 🛒**
Desde el menú lateral izquierdo, haz clic en "Ventas"

#### **PASO 3: Abre el formulario**
Haz clic en "+ Nueva venta" (botón verde)
Se abrirá un formulario con estos campos:
- **ID Producto:** El ID del producto (ej: "1")
- **Cantidad:** Número de unidades (ej: 5)
- **Nombre cliente:** Nombre completo (ej: "Carlos López")
- **ID Cliente:** ID del cliente en el sistema (ej: "1")
- **Usuario vendedor:** Tu usuario (ya está prellenado)

#### **PASO 4: Llena y Envía**
```
ID Producto:        1               (Samsung Galaxy S24)
Cantidad:           2
Nombre cliente:     Juan Pérez
ID Cliente:         1
Usuario vendedor:   vendedor1       (automático)
```

Haz clic en "💾 Guardar venta completa"

#### **PASO 5: Observa los Cambios Automáticos**
✅ Aparecerá un toast verde: "Venta registrada correctamente"  
✅ La nueva venta aparecerá en la tabla (primero en la lista)  
✅ El stock del producto se actualizó automáticamente  
✅ El formulario se cerró y limpió  
✅ **LA PÁGINA NO RECARGÓ** (todo fue actualización de estado local)

---

## 🏗️ Entender la Arquitectura

### Flujo de Datos

```
┌──────────────────────────────────┐
│  FRONTEND (React/HTML)           │
│  - Validación visual             │
│  - UI responsiva                 │
└─────────────┬────────────────────┘
              │
         FETCH POST
    (Content-Type: text/plain)
              │
┌─────────────▼────────────────────┐
│  GOOGLE APPS SCRIPT              │
│  - Lógica crítica                │
│  - Transacciones atómicas        │
│  - Triggers automáticos          │
└─────────────┬────────────────────┘
              │
         JSON Response
    (mensaje + stockRestante)
              │
┌─────────────▼────────────────────┐
│  FRONTEND ACTUALIZA ESTADO       │
│  - Actualiza stock               │
│  - Agrega nueva venta            │
│  - Renderiza tabla               │
│  - SIN RECARGAR LA PÁGINA        │
└──────────────────────────────────┘
```

### Qué Ocurre en Apps Script

Cuando envías una venta, el Apps Script ejecuta (`spCrearVenta`):

```
1. ✅ Busca el producto por ID
2. ✅ Valida stock suficiente
3. ✅ Registra venta en "ventas"
4. ✅ Descuenta stock en "productos"
5. ✅ Actualiza "inventario"
6. ✅ Genera "factura" automática
7. ✅ Registra bitácora en "informes"
8. ✅ Alerta si stock está bajo
9. ✅ Devuelve:
   - message: "Venta registrada correctamente"
   - stockRestante: 5
   - total: 1600
```

### Qué NO Ocurre en Frontend

❌ Frontend **NO** calcula totales  
❌ Frontend **NO** valida stock  
❌ Frontend **NO** modifica Sheets directamente  
❌ Frontend **NO** registra bitácoras  
❌ Frontend **NO** genera facturas  

Todo eso lo hace el Backend (Google Apps Script)

---

## 🧪 Casos de Prueba

### ✅ Caso 1: Venta Exitosa
```
ID Producto: 1
Cantidad: 2
Nombre cliente: Maria García
Resultado esperado:
- ✅ Toast verde
- ✅ Stock baja de 10 a 8
- ✅ Nueva venta aparece en tabla
```

### ❌ Caso 2: Stock Insuficiente
```
ID Producto: 1
Cantidad: 50 (pero solo hay 10)
Nombre cliente: Juan López
Resultado esperado:
- ❌ Toast rojo: "Stock insuficiente. Disponible: 10 uds."
- ❌ Venta NO se registra
- ✅ Stock se mantiene igual
```

### ❌ Caso 3: Campo Vacío
```
ID Producto: (vacío)
Cantidad: 5
Nombre cliente: Carlos
Resultado esperado:
- ❌ Mensaje visual: "ID producto es obligatorio."
- ❌ NO se envía al servidor
- ✅ Botón disponible para reintentar
```

### ❌ Caso 4: Cantidad Inválida
```
ID Producto: 1
Cantidad: -5 (o 0, o no es número)
Nombre cliente: Pedro
Resultado esperado:
- ❌ Mensaje visual: "La cantidad debe ser mayor a 0."
- ❌ NO se envía al servidor
```

---

## 💾 Archivos Modificados

| Archivo | Cambios |
|---------|---------|
| `frontend/public/tiendacel.html` | ✅ Headers CORS + Refresco de estados |
| `INTEGRACION_APPS_SCRIPT.md` | ✅ NUEVO - Guía completa |
| `QUICK_START.md` | ✅ NUEVO - Este archivo |

---

## 🔍 Debugging

### Abre la Consola del Navegador (F12)

Busca el mensaje del servidor:

```javascript
// En Network → tiendacel.html → XHR
// Busca POST a script.google.com

// Respuesta correcta:
{
  "success": true,
  "message": "Venta registrada correctamente",
  "id": "456",
  "total": 1600,
  "stockRestante": 5
}

// Error correcto:
{
  "success": false,
  "message": "Stock insuficiente. Disponible: 3 uds."
}
```

### Ver en Tiempo Real

Abre la consola y ejecuta:

```javascript
// Ver estado actual de productos
console.log(SESSION.data.productos);

// Ver estado actual de ventas
console.log(SESSION.data.ventas);

// Ver estado del usuario
console.log(SESSION.user);
```

---

## 📞 Soporte Rápido

### Problema: "CORS error"
**Verificar:**
- ¿Apps Script está publicado como Web App?
- ¿Se ejecuta como tu cuenta?
- ¿"Anyone" tiene acceso?

### Problema: Stock no se actualiza
**Verificar:**
- Abre F12 → Network
- Busca la respuesta JSON
- Verifica que tenga `"stockRestante": X`

### Problema: Venta no aparece
**Verificar:**
- ¿El servidor devolvió success: true?
- ¿El ID de la venta es único?
- Recarga la página (Ctrl+R) para verificar que se guardó en Sheets

---

## 🎓 Lecciones Clave

### 1. Separación de Responsabilidades
```
Frontend  = UI bonita + validación visual
Backend   = Lógica crítica + persistencia
```

### 2. Seguridad CORS
```
Content-Type: text/plain  ← Evita CORS preflight
mode: 'cors'             ← Acepta cookies y credenciales
```

### 3. Actualización de Estado Sin Recargar
```
// Antes (malo)
recargarYRefrescar()  // Hace otra llamada a Sheets

// Ahora (bueno)
SESSION.data.productos[i][5] = nuevoStock  // Actualiza local
mostrarModulo('ventas')                    // Re-renderiza
```

### 4. Mensajes del Servidor
```
// Apps Script devuelve el mensaje exacto
res.message = "Stock insuficiente. Disponible: 3 uds."

// Frontend lo muestra tal cual
toast(res.message, 'error')
```

---

## 🎉 ¡Listo!

Ahora tienes:
- ✅ Frontend integrado con Google Apps Script
- ✅ Validación visual en cliente
- ✅ Lógica crítica en servidor
- ✅ Refresco automático sin recargar
- ✅ Manejo de errores claro
- ✅ CORS configurado correctamente

**Próximo paso:** Prueba una venta ahora mismo 🛒

