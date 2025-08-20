"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { X, Filter, Search, SlidersHorizontal } from "lucide-react"

interface FilterState {
  search: string
  categories: string[]
  regions: string[]
  followersRange: [number, number]
  engagementRange: [number, number]
  sortBy: string
  sortOrder: "asc" | "desc"
}

interface AdvancedFiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  onClearFilters: () => void
}

const categories = [
  "Saúde",
  "Bem-estar",
  "Moda",
  "Tecnologia",
  "Games",
  "Cultura Pop",
  "Viagens",
  "Estilo de Vida",
  "Ecologia",
  "Bebidas",
  "Empreendedorismo",
  "Startup",
  "Finanças",
  "Marketing",
]

const regions = ["Global", "Brasil", "São Paulo", "Rio de Janeiro", "Minas Gerais", "Brasília", "Bahia", "Paraná"]

export function AdvancedFilters({ filters, onFiltersChange, onClearFilters }: AdvancedFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const updateFilters = (updates: Partial<FilterState>) => {
    onFiltersChange({ ...filters, ...updates })
  }

  const toggleCategory = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category]
    updateFilters({ categories: newCategories })
  }

  const toggleRegion = (region: string) => {
    const newRegions = filters.regions.includes(region)
      ? filters.regions.filter((r) => r !== region)
      : [...filters.regions, region]
    updateFilters({ regions: newRegions })
  }

  const activeFiltersCount =
    filters.categories.length +
    filters.regions.length +
    (filters.search ? 1 : 0) +
    (filters.followersRange[0] > 0 || filters.followersRange[1] < 1000 ? 1 : 0) +
    (filters.engagementRange[0] > 0 || filters.engagementRange[1] < 10 ? 1 : 0)

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-primary" />
            <CardTitle className="font-sans">Filtros Avançados</CardTitle>
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="font-serif">
                {activeFiltersCount} ativo{activeFiltersCount > 1 ? "s" : ""}
              </Badge>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {activeFiltersCount > 0 && (
              <Button variant="ghost" size="sm" onClick={onClearFilters} className="font-serif">
                Limpar Filtros
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)} className="font-serif">
              <SlidersHorizontal className="h-4 w-4 mr-1" />
              {isExpanded ? "Ocultar" : "Expandir"}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome, username ou descrição..."
            value={filters.search}
            onChange={(e) => updateFilters({ search: e.target.value })}
            className="pl-10 font-serif"
          />
        </div>

        {isExpanded && (
          <>
            {/* Categories */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold font-sans">Categorias</Label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={filters.categories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    />
                    <Label htmlFor={`category-${category}`} className="text-sm font-serif cursor-pointer">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Regions */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold font-sans">Região de Influência</Label>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <div key={region} className="flex items-center space-x-2">
                    <Checkbox
                      id={`region-${region}`}
                      checked={filters.regions.includes(region)}
                      onCheckedChange={() => toggleRegion(region)}
                    />
                    <Label htmlFor={`region-${region}`} className="text-sm font-serif cursor-pointer">
                      {region}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Followers Range */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold font-sans">
                Número de Seguidores (em milhares): {filters.followersRange[0]}K - {filters.followersRange[1]}K
              </Label>
              <Slider
                value={filters.followersRange}
                onValueChange={(value) => updateFilters({ followersRange: value as [number, number] })}
                max={1000}
                min={0}
                step={10}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground font-serif">
                <span>0K</span>
                <span>500K</span>
                <span>1M+</span>
              </div>
            </div>

            <Separator />

            {/* Engagement Range */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold font-sans">
                Taxa de Engajamento: {filters.engagementRange[0]}% - {filters.engagementRange[1]}%
              </Label>
              <Slider
                value={filters.engagementRange}
                onValueChange={(value) => updateFilters({ engagementRange: value as [number, number] })}
                max={10}
                min={0}
                step={0.1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground font-serif">
                <span>0%</span>
                <span>5%</span>
                <span>10%+</span>
              </div>
            </div>

            <Separator />

            {/* Sort Options */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-semibold font-sans">Ordenar por</Label>
                <Select value={filters.sortBy} onValueChange={(value) => updateFilters({ sortBy: value })}>
                  <SelectTrigger className="font-serif">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="followers">Seguidores</SelectItem>
                    <SelectItem value="engagement">Engajamento</SelectItem>
                    <SelectItem value="name">Nome</SelectItem>
                    <SelectItem value="category">Categoria</SelectItem>
                    <SelectItem value="region">Região</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold font-sans">Ordem</Label>
                <Select
                  value={filters.sortOrder}
                  onValueChange={(value) => updateFilters({ sortOrder: value as "asc" | "desc" })}
                >
                  <SelectTrigger className="font-serif">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="desc">Maior para Menor</SelectItem>
                    <SelectItem value="asc">Menor para Maior</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}

        {/* Active Filters Display */}
        {activeFiltersCount > 0 && (
          <div className="space-y-2">
            <Label className="text-sm font-semibold font-sans">Filtros Ativos</Label>
            <div className="flex flex-wrap gap-2">
              {filters.search && (
                <Badge variant="outline" className="font-serif">
                  Busca: "{filters.search}"
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-1 h-4 w-4 p-0"
                    onClick={() => updateFilters({ search: "" })}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}
              {filters.categories.map((category) => (
                <Badge key={category} variant="outline" className="font-serif">
                  {category}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-1 h-4 w-4 p-0"
                    onClick={() => toggleCategory(category)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
              {filters.regions.map((region) => (
                <Badge key={region} variant="outline" className="font-serif">
                  {region}
                  <Button variant="ghost" size="sm" className="ml-1 h-4 w-4 p-0" onClick={() => toggleRegion(region)}>
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
